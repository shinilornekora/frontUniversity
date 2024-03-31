function toggle() {
    const textNode = document.querySelector('#extra');

    if (textNode.style.display === 'none' || !textNode.style.display) {
        return textNode.style.display = 'block';
    } 
    
    return textNode.style.display = 'none';
}