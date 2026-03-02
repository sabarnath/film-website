const promoCode = "THUNDER50";
const copyButton = document.getElementById("copyCode");
const feedback = document.getElementById("copyFeedback");

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(promoCode);
    feedback.textContent = `Promo code ${promoCode} copied! Apply it before checkout.`;
  } catch {
    feedback.textContent = `Unable to auto-copy. Please use code: ${promoCode}`;
  }
});
