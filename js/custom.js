var num_ignored = 0;
for (var i = 0, slide; slide = slidedeck.slides[i]; ++i) {
  if (slide.dataset.countIgnore) {
    num_ignored++;
  }
}

for (var i = 0, slide; slide = slidedeck.slides[i]; ++i) {
  slide.dataset.totalSlides = slidedeck.slides.length - num_ignored;
}
