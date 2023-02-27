import MyReq from ".";

export const uploadCompressFile = (file) => MyReq({
    url: '/upload',
    data: file
})