module.exports = async function ({helpers}) {
    const result = await helpers.axios.get(
        "https://styled-quotes.vercel.app/api?theme=buefy&layout=default"
    );

    const message = result.data;

    return {message: message};
};