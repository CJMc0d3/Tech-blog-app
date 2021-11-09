const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const input = document.querySelector('#post-input').value.trim();

    if (title && input) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, input }),
            headers: {
                'Input-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};

const delButtonHandler = async (event) => {
    if(event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    }
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', delButtonHandler);

document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);