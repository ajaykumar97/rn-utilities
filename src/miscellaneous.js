const regex = {
    emailMobileNo: /^([0-9]{9})|([A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$/,
    mobileNo: /^([0-9]{10})$/,
    price: /^[1-9][0-9]*$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
    password: /^[a-zA-Z0-9!@#$%^&*]{1,16}$/         //min 1, max 16, aplhanumeric with special characters !@#$%^&*
};

const mime_type = {
    image: 'image/jpeg',
    formData: 'multipart/form-data',
    pdf: 'application/pdf'
};

export {
    regex,
    mime_type
}
