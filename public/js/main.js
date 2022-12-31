function onSubmit(e) {
    e.preventDefault();

    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if(prompt === '') {
        alert("isi dek");
        return;
    }

    generateImageRequest(prompt, size);
}


async function generateImageRequest(prompt, size) {
    try {
        const response = await fetch("http://localhost:5000/api/openai/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt,
                size
            })
        });

        const data = await response.json();
        const imageUrl = data.url;
        
        document.querySelector('#image').src = imageUrl;
    } catch (error) {
        console.log(error.message);
        document.querySelector('.msg').textContent = error;
    }
}






document.querySelector('#image-form').addEventListener('submit', onSubmit);