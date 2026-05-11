/**
 * Virtual Try-On Feature
 * Handles photo upload, clothing selection, and preview generation
 */

class VirtualTryOn {
  constructor() {
    this.uploadArea = document.getElementById('photo-upload-area');
    this.photoInput = document.getElementById('photo-input');
    this.clothingType = document.getElementById('clothing-type');
    this.generateBtn = document.getElementById('generate-tryon');
    this.previewSection = document.getElementById('preview-section');
    this.tryAgainBtn = document.getElementById('try-again-btn');
    this.downloadBtn = document.getElementById('download-btn');
    this.shareBtn = document.getElementById('share-btn');
    
    this.photoFile = null;
    this.photoType = null;
    this.selectedClothing = null;
    this.selectedColor = null;
    this.selectedSize = null;
    
    this.init();
  }

  init() {
    // Upload area events
    this.uploadArea.addEventListener('click', () => this.photoInput.click());
    this.uploadArea.addEventListener('dragover', (e) => this.handleDragOver(e));
    this.uploadArea.addEventListener('dragleave', () => this.uploadArea.classList.remove('drag-over'));
    this.uploadArea.addEventListener('drop', (e) => this.handleDrop(e));
    
    // File input
    this.photoInput.addEventListener('change', (e) => this.handleFileSelect(e));
    
    // Clothing type
    this.clothingType.addEventListener('change', (e) => {
      this.selectedClothing = e.target.value;
      this.updateGenerateButton();
    });
    
    // Color options
    document.querySelectorAll('.color-option').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleColorSelect(e));
    });
    
    // Size options
    document.querySelectorAll('.size-option').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleSizeSelect(e));
    });
    
    // Generate button
    this.generateBtn.addEventListener('click', () => this.generateTryOn());
    
    // Try again button
    this.tryAgainBtn.addEventListener('click', () => this.resetPreview());
    
    // Download button
    this.downloadBtn.addEventListener('click', () => this.downloadImage());
    
    // Share button
    this.shareBtn.addEventListener('click', () => this.shareImage());
  }

  handleDragOver(e) {
    e.preventDefault();
    this.uploadArea.classList.add('drag-over');
  }

  handleDrop(e) {
    e.preventDefault();
    this.uploadArea.classList.remove('drag-over');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      this.photoInput.files = files;
      this.handleFileSelect({ target: this.photoInput });
    }
  }

  handleFileSelect(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file
    if (!this.validateFile(file)) {
      alert('Please upload a JPG, PNG, or WebP image smaller than 10MB');
      return;
    }

    this.photoFile = file;
    this.analyzePhoto();
  }

  validateFile(file) {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const maxSize = 10 * 1024 * 1024; // 10MB
    
    return validTypes.includes(file.type) && file.size <= maxSize;
  }

  analyzePhoto() {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Simple detection: aspect ratio indicates full-body vs waist-up
        const aspectRatio = img.height / img.width;
        
        // Full-body photo typically has higher aspect ratio (height > 1.2x width)
        this.photoType = aspectRatio > 1.2 ? 'full-body' : 'waist-up';
        
        this.displayPhotoDetection();
        this.enableClothingOptions();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(this.photoFile);
  }

  displayPhotoDetection() {
    const detectionBox = document.getElementById('photo-detection');
    const photoTypeLabel = document.getElementById('photo-type-label');
    const tryOnModeLabel = document.getElementById('tryon-mode-label');
    
    detectionBox.classList.remove('d-none');
    
    if (this.photoType === 'full-body') {
      photoTypeLabel.textContent = 'Full-body photo';
      tryOnModeLabel.textContent = 'Full outfit try-on enabled';
    } else {
      photoTypeLabel.textContent = 'Waist-up photo';
      tryOnModeLabel.textContent = 'Upper clothing only';
    }
  }

  enableClothingOptions() {
    // Enable clothing type dropdown
    this.clothingType.disabled = false;
    
    // Filter clothing options based on photo type
    const options = this.clothingType.querySelectorAll('option');
    options.forEach(opt => {
      if (opt.value === '') {
        opt.disabled = false;
      } else if (this.photoType === 'waist-up') {
        // For waist-up, only allow upper clothing
        opt.disabled = ['pants'].includes(opt.value);
      } else {
        // For full-body, allow all
        opt.disabled = false;
      }
    });
    
    // Enable color and size options
    document.querySelectorAll('.color-option').forEach(btn => {
      btn.disabled = false;
    });
    
    document.querySelectorAll('.size-option').forEach(btn => {
      btn.disabled = false;
    });
  }

  handleColorSelect(e) {
    const btn = e.target;
    if (btn.disabled) return;
    
    document.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this.selectedColor = btn.dataset.color;
    this.updateGenerateButton();
  }

  handleSizeSelect(e) {
    const btn = e.target;
    if (btn.disabled) return;
    
    document.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this.selectedSize = btn.dataset.size;
    this.updateGenerateButton();
  }

  updateGenerateButton() {
    const isEnabled = this.photoFile && this.selectedClothing && this.selectedColor && this.selectedSize;
    this.generateBtn.disabled = !isEnabled;
  }

  async generateTryOn() {
    // Show loading state
    const loadingDiv = document.getElementById('preview-loading');
    const previewImg = document.getElementById('preview-image');
    
    this.previewSection.classList.remove('d-none');
    loadingDiv.classList.remove('d-none');
    previewImg.style.display = 'none';
    
    try {
      // Prepare form data
      const formData = new FormData();
      formData.append('photo', this.photoFile);
      formData.append('clothingType', this.selectedClothing);
      formData.append('color', this.selectedColor);
      formData.append('size', this.selectedSize);
      formData.append('photoType', this.photoType);
      
      // Send to backend (you'll need to implement this endpoint)
      // For now, we'll simulate with a placeholder
      await this.simulateGenerateTryOn();
      
      loadingDiv.classList.add('d-none');
      previewImg.style.display = 'block';
      
      // Update details
      this.updatePreviewDetails();
      
    } catch (error) {
      console.error('Error generating try-on:', error);
      alert('Error generating try-on. Please try again.');
      loadingDiv.classList.add('d-none');
    }
  }

  async simulateGenerateTryOn() {
    // Placeholder for actual AI processing
    // In production, this would call your backend API endpoint
    return new Promise((resolve) => {
      setTimeout(() => {
        // For demo, we'll show the original photo
        // In production, this would be the AI-generated try-on image
        const reader = new FileReader();
        reader.onload = (e) => {
          document.getElementById('preview-image').src = e.target.result;
          resolve();
        };
        reader.readAsDataURL(this.photoFile);
      }, 2000); // Simulate 2-second processing
    });
  }

  updatePreviewDetails() {
    document.getElementById('detail-type').textContent = 
      this.clothingType.options[this.clothingType.selectedIndex].text;
    
    document.getElementById('detail-color').textContent = 
      this.selectedColor.charAt(0).toUpperCase() + this.selectedColor.slice(1);
    
    document.getElementById('detail-size').textContent = this.selectedSize;
  }

  downloadImage() {
    const canvas = document.getElementById('preview-image');
    const link = document.createElement('a');
    link.href = canvas.src;
    link.download = `ar-clothing-tryon-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  shareImage() {
    const imageUrl = document.getElementById('preview-image').src;
    const text = `Check out my virtual try-on from @arclothingzone! I love this ${this.selectedClothing} in ${this.selectedColor}. 🛍️ #ArClothingZone #VirtualTryOn`;
    
    if (navigator.share) {
      navigator.share({
        title: 'AR Clothing Zone Virtual Try-On',
        text: text,
        url: window.location.href
      }).catch(err => console.log('Error sharing:', err));
    } else {
      // Fallback for browsers that don't support Web Share API
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
      const instaUrl = `https://instagram.com/`;
      
      const shareOptions = `
        Share on:
        - Twitter: ${twitterUrl}
        - Instagram: ${instaUrl}
        - Facebook
      `;
      alert(shareOptions);
    }
  }

  resetPreview() {
    this.previewSection.classList.add('d-none');
    this.selectedClothing = null;
    this.selectedColor = null;
    this.selectedSize = null;
    
    // Reset UI
    this.clothingType.value = '';
    document.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
    
    this.generateBtn.disabled = true;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new VirtualTryOn();
});
