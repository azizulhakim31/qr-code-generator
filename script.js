const input = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const canvas = document.getElementById("qrCanvas");
const ctx = canvas.getContext("2d");

const message = document.getElementById("message");

let qrCodeGenerated = false;

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
    input.value = "";
    qrCodeGenerated = true;
}

function downloadQR() {
    if (!qrCodeGenerated) {
        alert("Generate a QR code first.")
        return;
    }

    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = canvas.toDataURL("image/png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

generateBtn.addEventListener("click", generateQR);
downloadBtn.addEventListener("click", downloadQR)