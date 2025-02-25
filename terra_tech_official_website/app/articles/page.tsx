import React from 'react'
import { articleWebsiteDomain, accessCode } from '@/lib'
import Link from 'next/link';
import styles from './page.module.css'

const fetchUserArticles = async (accessCode: string) => {
    try {
        const response = await fetch(`${articleWebsiteDomain}/api/fetch-articles/`, {
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
    return (
        <div className={styles.pageContainer}>
            {articles.map((article: any, index: any) => (
                <div key={index} className={styles.articleCard}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <p>{article.creation_date}</p>
                    <Link href="/article/[title]" as={`/article/${article.title}`}>
                        <button className={styles.view_article_button}>View {article.title}</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default page