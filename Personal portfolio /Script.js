fetch('/projects')
.then(res => res.json())
.then(data => {

    const projectDiv = document.getElementById('projects');

    data.forEach(project => {

        projectDiv.innerHTML += `
        <div>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        </div>
        `;
    });
});

document.getElementById('contactForm')
.addEventListener('submit', async(e)=>{

    e.preventDefault();

    const data = {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('message').value
    };

    const response = await fetch('/contact',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });

    alert("Message Sent!");
});
