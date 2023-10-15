from PIL import Image

# Open the input image
input_image = Image.open('input.jpg')

# Define the desired width and height
width = input('Enter the width')  # Replace with your desired width
desired_width = int(width) 
height = input('Enter the height')  # Replace with your desired height
desired_height = int(height)

# Upscale the image to the desired resolution
upscaled_image = input_image.resize((desired_width, desired_height), Image.NEAREST)

# Save the upscaled image
upscaled_image.save('upscaled_image.jpg')

# Close the input image
input_image.close()
