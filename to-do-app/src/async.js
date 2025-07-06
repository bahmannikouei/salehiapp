async function getData(){
    const javab = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    if (!javab.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await javab.json();
    console.log('Data fetched successfully:', data);
    return data; 
}


fetch('api')
    .then(res=> res.json())
    .then(data => console.log(data));
