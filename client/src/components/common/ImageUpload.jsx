import React, { useEffect, useRef, useState } from 'react';
import '../styles/ImageUpload.css'
import app from '../../../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const ImageUpload = () => {
    const [imageURL, setImageURL] = useState('');
    const imageRef = useRef(null);

    useEffect(()=>{
        console.log(imageURL)
    },[imageURL])

    const handleImageChange = () => {

        const file = imageRef.current.files[0]; // Get the selected file
        if (file) {
            const storage = getStorage(app); // Initialize Firebase Storage
            const fileName = `${new Date().getTime()}_${file.name}`;
            const storageRef = ref(storage, `test/image/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Monitor the upload process
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Calculate upload progress
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    // You can handle different states of the upload here (optional)
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                    console.error('Upload failed:', error);
                },
                async () => {
                    // Handle successful uploads on complete
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        setImageURL(downloadURL);
                    } catch (error) {
                        console.error('Error getting download URL:', error);
                    }
                }
            );
        }

    };

    return (
        <>
            <div className="image-upload">
                <div className="inner-img-upload">
                    <input type="file" onChange={handleImageChange} ref={imageRef} accept=".jpg, .jpeg, .png, .gif" />
                </div>
            </div>
        </>
    );
}

export default ImageUpload;
