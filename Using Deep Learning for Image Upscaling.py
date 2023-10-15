import cv2
import torch
import numpy as np
from esrgan_pytorch import ESRGAN

# Load the ESRGAN model
model = ESRGAN()

# Load the input image
image = cv2.imread('input_image.jpg')

# Convert BGR to RGB
image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

# Upscale the image using ESRGAN
upscaled_image = model.upscale(image_rgb)

# Convert the output image to BGR
upscaled_image_bgr = cv2.cvtColor(upscaled_image, cv2.COLOR_RGB2BGR)

# Save the upscaled image
cv2.imwrite('output_image.jpg', upscaled_image_bgr)
