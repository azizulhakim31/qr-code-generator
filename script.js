const input = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const canvas = document.getElementById("qrCanvas");
const ctx = canvas.getContext("2d");

const message = document.getElementById("message");

function generateQR() {
    const text = input.value.trim();

    if (!text) {
        alert("Please enter some text.");

        input.focus();
        return;
    }

    const qr = qrcode(0, "M");
    qr.addData(text);
    qr.make();

    const moduleCount = qr.getModuleCount();

    const cellSize = 8;

    const margin = 4;

    const totalSize = (moduleCount + margin * 2) * cellSize;

    canvas.width = totalSize;
    canvas.height = totalSize;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, totalSize, totalSize);

    for (let row = 0; row < moduleCount; row++) {

        for (let col = 0; col < moduleCount; col++) {

            if (qr.isDark(row, col)) {
                ctx.fillStyle = "black";
                ctx.fillRect(
                    (col + margin) * cellSize,
                    (row + margin) * cellSize,
                    cellSize,
                    cellSize
                );
            }
        }
    }

    canvas.style.display = "block";
    message.style.display = "none";
}

generateBtn.addEventListener("click", generateQR);
