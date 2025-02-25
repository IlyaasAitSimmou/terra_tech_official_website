
import React, { useEffect, useState } from 'react'
import { articleWebsiteDomain, accessCode  } from '@/lib'

const fetchUserArticle = async (accessCode: string, articleTitle: string) => {
    try {
        const response = await fetch(`${articleWebsiteDomain}/api/fetch-article/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ accessCode, articleTitle }),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Error:', error.error);
            return;
        }

        const data = await response.json();
        // console.log('User Articles:', data.articles);
        // console.log(data.articles[0].content)
        return data.articles[0];
    } catch (error) {
        console.error('Fetch error:', error);
    }
}


const page = async ({ params }: { params: { title: string } }) => {
    const { title } = params;
    const article = await fetchUserArticle(String(accessCode), String(title));
  return (
    <div>
        <div dangerouslySetInnerHTML={{__html: article.content}}/>
    </div>
  )
}

export default page