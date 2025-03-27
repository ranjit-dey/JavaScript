document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("input-text");
  const magicText = document.getElementById("magic-text");
  const toggleCase = document.getElementById("toggle-case");
  const cypherText = document.getElementById("cypher-text");
  const toggleCypher = document.getElementById("toggle-cypher-text");
  const resetButton = document.querySelector("button[type='reset']");

  let hiddenMagicText = "";

  function reverseCase(str) {
    return str
      .split("")
      .map((char) => {
        if (char >= "a" && char <= "z") return char.toUpperCase();
        if (char >= "A" && char <= "Z") return char.toLowerCase();
        return char;
      })
      .join("");
  }

  function encryptText(str) {
    return str
      .split("")
      .map((char) => {
        if (char >= "a" && char <= "z")
          return String.fromCharCode(((char.charCodeAt(0) - 97 + 7) % 26) + 97);
        if (char >= "A" && char <= "Z")
          return String.fromCharCode(((char.charCodeAt(0) - 65 + 7) % 26) + 65);
        if (char >= "0" && char <= "9")
          return String.fromCharCode(((char.charCodeAt(0) - 48 + 7) % 10) + 48);
        return char;
      })
      .join("");
  }

  function updateText() {
    let transformedText = reverseCase(inputText.value);
    if (toggleCase.checked) {
      magicText.value = transformedText;
    } else {
      hiddenMagicText = transformedText;
      magicText.value = "";
    }

    if (toggleCypher.checked) {
      cypherText.value = encryptText(transformedText);
    } else {
      cypherText.value = "";
    }
  }

  inputText.addEventListener("input", updateText);
  toggleCase.addEventListener("change", updateText);
  toggleCypher.addEventListener("change", updateText);

  magicText.addEventListener("click", function () {
    if (!toggleCase.checked) {
      magicText.value = hiddenMagicText;
    }
  });

  resetButton.addEventListener("click", function () {
    inputText.value = "";
    magicText.value = "";
    cypherText.value = "";
    hiddenMagicText = "";
    toggleCase.checked = false;
    toggleCypher.checked = false;
  });
});
