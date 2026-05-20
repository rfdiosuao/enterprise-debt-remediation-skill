const copyStatus = document.querySelector('#copy-status');

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const text = button.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(text);
      if (copyStatus) copyStatus.textContent = '已复制到剪贴板。';
    } catch {
      if (copyStatus) copyStatus.textContent = '复制失败，请手动复制。';
    }

    window.clearTimeout(button.copyTimer);
    button.copyTimer = window.setTimeout(() => {
      if (copyStatus) copyStatus.textContent = '点击任意指令卡片可复制命令。';
    }, 1800);
  });
});
