let activeTooltip = null;

const tooltipElements = document.querySelectorAll('.has-tooltip');

function showTooltip(element) {
  if (activeTooltip) {
    activeTooltip.classList.remove('tooltip_active');
    activeTooltip = null;
  }

  const tooltipText = element.getAttribute('title');
  const tooltip = document.createElement('div');
  tooltip.textContent = tooltipText;
  tooltip.className = 'tooltip';
  const elementRect = element.getBoundingClientRect();
  tooltip.style.left = elementRect.left + 'px';
  tooltip.style.top = elementRect.bottom + 'px';

  document.body.appendChild(tooltip);
  tooltip.classList.add('tooltip_active');

  activeTooltip = tooltip;
}

tooltipElements.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    showTooltip(element);
  });
});
