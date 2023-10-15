from PIL import Image, ImageFilter

# Open the input image
input_image = Image.open('input.jpg')

# Apply sharpening filter
sharpened_image = input_image.filter(ImageFilter.SHARPEN)

# Save the sharpened image
sharpened_image.save('sharpened_image.jpg')

# Close the input image
input_image.close()
