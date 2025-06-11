"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Badge,
  Button,
  Card,
  Column,
  Dialog,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Input,
  SmartImage,
  Text,
} from "@/once-ui/components";
import {
  Search,
  Grid3X3,
  Grid2X2,
  LayoutGrid,
  RefreshCw,
  AlertCircle,
  Download,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useInView } from "@/hooks/use-intersection-observer"

interface CloudinaryImage {
  public_id: string
  secure_url: string
  width: number
  height: number
  format: string
  bytes: number
  created_at: string
  tags: string[]
}

interface CloudinaryResponse {
  resources: CloudinaryImage[]
  next_cursor?: string
  error?: string
}

export default function CloudinaryGallery() {
  const [images, setImages] = useState<CloudinaryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [nextCursor, setNextCursor] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<CloudinaryImage | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredImages, setFilteredImages] = useState<CloudinaryImage[]>([])
  const [gridSize, setGridSize] = useState<"small" | "medium" | "large">("medium")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  // Fetch images from Cloudinary
  const fetchImages = useCallback(async (cursor?: string, reset = false) => {
    try {
      if (!reset) setLoadingMore(true)
      setError(null)

      const params = new URLSearchParams({
        max_results: "200",
        resource_type: "image",
        ...(cursor && { next_cursor: cursor }),
      })

      const response = await fetch(`/api/cloudinary/images?${params}`)
      const data: CloudinaryResponse = await response.json()

      if (data.error) {
        setError(data.error)
        return
      }

      if (reset) {
        setImages(data.resources || [])
      } else {
        setImages((prev) => [...prev, ...(data.resources || [])])
      }

      setNextCursor(data.next_cursor || null)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed to fetch images")
      console.error("Error fetching images:", error)
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }, [])

  // Initial load
  useEffect(() => {
    fetchImages(undefined, true)
  }, [fetchImages])

  // Load more when scrolling to bottom
  useEffect(() => {
    if (inView && nextCursor && !loadingMore && !error) {
      fetchImages(nextCursor)
    }
  }, [inView, nextCursor, loadingMore, fetchImages, error])

  // Filter images based on search
  useEffect(() => {
    if (!images || images.length === 0) {
      setFilteredImages([])
      return
    }

    if (!searchTerm) {
      setFilteredImages(images)
    } else {
      const filtered = images.filter(
        (image) =>
          image.public_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (image.tags && image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))),
      )
      setFilteredImages(filtered)
    }
  }, [images, searchTerm])

  const openImageDialog = (image: CloudinaryImage, index: number) => {
    setSelectedImage(image)
    setSelectedIndex(index)
  }

  const closeImageDialog = () => {
    setSelectedImage(null)
    setIsFullscreen(false)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (!filteredImages || filteredImages.length <= 1) return

    const currentIndex = filteredImages.findIndex((img) => img.public_id === selectedImage?.public_id)
    let newIndex = currentIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex])
    setSelectedIndex(newIndex)
  }

  const downloadImage = (image: CloudinaryImage) => {
    const link = document.createElement("a")
    link.href = image.secure_url
    link.download = `${image.public_id}.${image.format}`
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const retryFetch = () => {
    setError(null)
    setLoading(true)
    fetchImages(undefined, true)
  }

  const getGridProps = (gridSize: "small" | "medium" | "large") => {
    switch (gridSize) {
      case "small":
        return {
          mobileColumns: 2 as const,
          tabletColumns: 3 as const,
          columns: 6 as const,
        }
      case "medium":
        return {
          mobileColumns: 2 as const,
          tabletColumns: 4 as const,
          columns: 5 as const,
        }
      case "large":
        return {
          mobileColumns: 1 as const,
          tabletColumns: 2 as const,
          columns: 3 as const,
        }
      default:
        return {
          mobileColumns: 2 as const,
          tabletColumns: 3 as const,
          columns: 4 as const,
        }
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <Column className="min-h-screen bg-background">
      <Column
        className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur"
        padding="16"
      >
        <Flex align="center" wrap={true} gap="16">
          <Column gap="4">
            <Heading size="l">Mathias Pérez</Heading>
            <Text variant="body-default-l" className="text-muted-foreground">
              {filteredImages.length} images
              {searchTerm && images && ` (filtré sur ${images.length})`}
            </Text>
          </Column>

          <Flex gap="8" wrap={true}>
            <Flex align="center" className="relative">
              <Icon name="search" className="absolute left-3 text-muted-foreground h-4 w-4" />
              <Input
                id="image-search"
                label="Chercher"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />

            </Flex>

            <Flex gap="4" className="border rounded-md p-1">
              <IconButton
                size="s"
                variant={gridSize === "small" ? "primary" : "ghost"}
                onClick={() => setGridSize("small")}
              >
                <Grid3X3 />
              </IconButton>

              <IconButton
                size="s"
                variant={gridSize === "medium" ? "primary" : "ghost"}
                onClick={() => setGridSize("medium")}
              >
                <Grid2X2 />
              </IconButton>

              <IconButton
                size="s"
                variant={gridSize === "large" ? "primary" : "ghost"}
                onClick={() => setGridSize("large")}
              >
                <LayoutGrid />
              </IconButton>

            </Flex>
          </Flex>
        </Flex>
      </Column>

      <Column padding="24">
        {error && (
          <>
            <Text size="s">Erreur lors du chargement des images</Text>
            <Column gap="8">
              <Text>{error}</Text>
              <Button size="s" onClick={retryFetch}>
                <Icon name="refresh" className="mr-2" />
                Réessayer
              </Button>
            </Column>
          </>
        )}

        {loading ? (
          <Grid gap="4" {...getGridProps(gridSize)}>

            {Array.from({ length: 12 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                {/* <Skeleton className="aspect-square w-full" /> */}
              </Card>
            ))}
          </Grid>
        ) : filteredImages.length > 0 ? (
          <Grid gap="4" {...getGridProps(gridSize)}>


            {filteredImages.map((image, index) => (
              <Card
                key={image.public_id}
                className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                onClick={() => openImageDialog(image, index)}
              >
                <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] overflow-hidden">


                  <SmartImage
                    src={image.secure_url || "/placeholder.svg"}
                    alt={image.public_id}
                    fill
                    className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Badge className="text-xs">
                      {image.format.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
        ) : !error ? (
          <Column align="center" paddingY="48">
            <Text variant="body-default-l">Aucune image trouvée dans votre compte Cloudinary</Text>
            <Text size="s" variant="body-default-l" className="mt-2">
              Téléversez des images dans votre compte Cloudinary pour les voir ici
            </Text>
          </Column>
        ) : null}

        {nextCursor && !error && (
          <div ref={loadMoreRef} className="flex justify-center py-8">
            {loadingMore && (
              <Grid gap="4" {...getGridProps(gridSize)}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    {/* <Skeleton className="aspect-square w-full" /> */}
                  </Card>
                ))}
              </Grid>
            )}
          </div>
        )}

        {!nextCursor && !loading && filteredImages.length > 0 && !error && (
          <Text align="center" variant="body-default-l" className="py-8">
            You've reached the end of the gallery
          </Text>
        )}
      </Column>

      {/* Image Dialog */}
      <Dialog
        title={selectedImage?.public_id || "Image Viewer"}
        isOpen={!!selectedImage}
        onClose={closeImageDialog}
        fill
        minHeight={600}
        className={`${isFullscreen
          ? "max-w-screen max-h-screen w-screen h-screen"
          : "max-w-4xl max-h-[90vh]"
          } p-0 overflow-hidden`}
      >
        {selectedImage && (
          <Column className="relative w-full h-full flex-1">
            {/* Header */}
            <Flex
              align="center"
              className="absolute top-0 left-0 right-0 z-10 bg-black/50 backdrop-blur-sm text-white p-4"
            >
              <Column className="min-w-0">
                <Text className="font-semibold truncate">{selectedImage.public_id}</Text>
                <Flex gap="16" className="text-sm text-white/80 mt-1">
                  <Text>{selectedImage.width} × {selectedImage.height}</Text>
                  <Text>{formatFileSize(selectedImage.bytes)}</Text>
                  <Text>{selectedImage.format.toUpperCase()}</Text>
                </Flex>
              </Column>
              <Flex gap="8">
                <IconButton
                  variant="ghost"
                  onClick={() => downloadImage(selectedImage)}
                  className="text-white hover:bg-white/20"
                >
                  <Download />
                </IconButton>
                <IconButton
                  variant="ghost"
                  onClick={toggleFullscreen}
                  className="text-white hover:bg-white/20"
                >
                  <Maximize2 />
                </IconButton>
                <IconButton
                  variant="ghost"
                  onClick={closeImageDialog}
                  className="text-white hover:bg-white/20"
                >
                  <X />
                </IconButton>
              </Flex>
            </Flex>

            {/* Image */}
            <Flex align="center" className="flex-1 bg-black">

              <SmartImage
                src={selectedImage.secure_url || "/placeholder.svg"}
                alt={selectedImage.public_id}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </Flex>
            <Flex margin="4">
              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <IconButton
                    onClick={() => navigateImage("prev")}
                    className="absolute mr-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
                  >
                    <ChevronLeft />
                  </IconButton>
                  <IconButton
                    onClick={() => navigateImage("next")}
                    className="absolute top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
                  >
                    <ChevronRight />
                  </IconButton>
                </>
              )}
            </Flex>

            {/* Footer */}
            <Flex className="absolute bottom-0 left-0 right-0 z-10 bg-black/50 backdrop-blur-sm text-white p-4">
              <Flex gap="4" wrap={true}>
                {selectedImage.tags?.map((tag) => (
                  <Badge key={tag} className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </Flex>
              <Text size="s" className="text-white/80">
                {selectedIndex + 1} sur {filteredImages.length}
              </Text>
            </Flex>
          </Column>
        )}
      </Dialog>

    </Column>
  )
}
