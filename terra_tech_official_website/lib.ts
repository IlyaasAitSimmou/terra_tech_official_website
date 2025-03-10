export const accessCode = process.env.ACCESS_CODE;
export const articleWebsiteDomain = process.env.ARTICLE_WEBSITE_DOMAIN;


export const fetchUserArticles = async (accessCode: string) => {
    try {
        const domain = articleWebsiteDomain || 'https://default-api-url.com';
        const response = await fetch(`${domain}/api/fetch-articles/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ accessCode }),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Error:', error.error);
            return;
        }

        const data = await response.json();
        // console.log('User Articles:', data.articles);
        return data.articles;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}