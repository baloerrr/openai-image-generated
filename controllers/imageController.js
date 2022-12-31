const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv").config();
const fs = require('fs');

const configuration = new Configuration({
    organization: "org-ocpap1CFKZGAa8JXllHYH8RS",
    apiKey: "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" || process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const generateImageRequest = async(req,res) => {
    const { prompt , size } = req.body;

    const imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024'; 

    try {
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: imageSize
        });
        const imageUrl = await response.data.data[0].url;

        res.status(200).json({
            success: true,
            url: imageUrl
        });

    } catch (error) {
        if(error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }

}

module.exports = { generateImageRequest }