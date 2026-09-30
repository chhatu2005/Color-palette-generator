const generateColor = ()=>
{
    const letters = "0123456789ABCDEF"
    var color = "#"

    for(var i = 0; i<6; i++)
    {
        color = color + letters[Math.floor(Math.random() * 16)]
    }

    return color
}

const generatePalette = ()=>
{
    const palette = document.getElementById("palette")
    palette.innerHTML = ""

    for(var i=0;i<5;i++)
    {
        const color = generateColor()
        palette.innerHTML += 
        `
             <div class="color-box" onclick="copyColor('${color}')">

                 <div class="color" style="background-color: ${color}"></div>

                 <div class="color-code">${color}</div>

             </div>

        `
    }
    document.getElementById("message").innerHTML = ""
}


const copyColor = (color)=>
{
    navigator.clipboard.writeText(color)
    .then(()=>
    {
        document.getElementById("message").innerText = color + " copied to clipboard"
    })
    .catch(()=>
    {
        document.getElementById("message").innerText = "Unable to copy color"
    })
}

generatePalette();