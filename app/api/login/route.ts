import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email_id, password } = req.body;

    try {
        const url = 'https://api.example.com/login'; // Replace with your API endpoint
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email_id, password }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        res.status(200).json(data); // Return data from the API endpoint
    } catch (error) {
        console.error('Error during login:', email_id.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
