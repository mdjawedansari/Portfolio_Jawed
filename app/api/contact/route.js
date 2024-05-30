import clientPromise from '@app/Db/mongodb';
import { sendMail } from '@/app/utils/sendMail';
import { NextResponse } from 'next/server';


export async function POST(req) {
  try {
    const formData = await req.json();

    // Save form data to MongoDB
    const client = await clientPromise;
    const db = client.db('portfolio');
    const contact =  await db.collection('contacts').insertOne(formData);
    if(!contact.insertedId){
        throw new Error('contact not found !');
    } else {
        console.log('Contact successfully inserted with ID:', contact.insertedId);
      }

    await sendMail(formData);
    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ success: false, message: 'Failed to submit form', error }, { status: 500 });
  } finally {
    client.close(); 
  }
}
