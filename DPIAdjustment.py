from PIL import Image

# Open the image
image = Image.open('input.jpg')

# Set the desired DPI (e.g., 300 DPI)
dpi_value = (300, 300)

# Set the DPI in the image info
image.info['dpi'] = dpi_value

# Save the image with the new DPI
image.save('dpi_adjusted_image.jpg')
