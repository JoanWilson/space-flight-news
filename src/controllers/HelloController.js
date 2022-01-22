class HelloController {
    async index(req, res) {
        res.status(200).send('<h1>Back-end Challenge 2021 🏅 - Space Flight News</h1>');
    }   
}

export default new HelloController();