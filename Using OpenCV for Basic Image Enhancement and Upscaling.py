import cv2

# Load the image
image = cv2.imread('input.jpg')

# Perform image enhancement (e.g., adjust brightness and contrast)
enhanced_image = cv2.convertScaleAbs(image, alpha=2.0, beta=50)

# Upscale the image
upscaled_image = cv2.resize(enhanced_image, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)

# Save the enhanced and upscaled image
cv2.imwrite('output_image.jpg', upscaled_image)
