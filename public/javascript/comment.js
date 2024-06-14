// const postId = document.querySelector('input[name="post-id"]').value;
const editform = document.querySelector('#edit-form');


const commentFormHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('textarea[name="comment-body"]').value.trim();
    console.log(comment);

    if (comment) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                comment: comment,
                postId: postId,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    };
} 


const editformhandler = async (event) =>{
    event.preventDefault();
    const posttitle = document.querySelector('#post-title').value.trim();
    console.log(posttitle);
    const postcontent = document.querySelector('#post-content').value.trim();
    console.log(postcontent);
    const response = await fetch('/api/post/', {
        method: 'PUT',
        body: JSON.stringify({
            comment: comment,
            postId: postId,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }

}
if(document.querySelector('.comment-form') !=null) {  


    document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
}

editform.addEventListener('submit',editformhandler);
