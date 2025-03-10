import React from 'react'
import { articleWebsiteDomain, accessCode } from '@/lib'
import Link from 'next/link';
import styles from './page.module.css'

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


const page = async () => {
    const articles = await fetchUserArticles(String(accessCode));
    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(date);
      };
    return (
        <div className={styles.pageContainer}>
            {articles && articles.map((article: any, index: any) => (
                <div key={index} className={styles.articleCard}>
                    <Link href="/article/[title]" as={`/article/${article.title}`}>
                        <img src={article.image_base64} alt="Image" className={styles.article_image}/>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <p>{formatDate(article.creation_date)}</p>
                    
                        {/* <button className={styles.view_article_button}>View {article.title}</button> */}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default page