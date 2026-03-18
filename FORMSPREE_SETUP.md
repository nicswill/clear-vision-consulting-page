# Formspree Setup Instructions

This assessment uses Formspree to send assessment results via email. Follow these steps to configure the form submission.

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account (or log in if you have one)
3. The free plan supports up to 50 submissions per month

## Step 2: Create a New Form

1. Click **"+ New Form"** in your Formspree dashboard
2. Give your form a name: **"P3 Assessment Submissions"**
3. Click **"Create Form"**

## Step 3: Get Your Form Endpoint

After creating the form, you'll see your unique form endpoint. It will look like:

```
https://formspree.io/f/YOUR_FORM_ID
```

Copy this URL.

## Step 4: Configure Email Destination

By default, Formspree sends submissions to the email address associated with your account. To ensure submissions go to **cvadmin@clearvisionleader.com**:

1. In your Formspree form settings, go to the **"Email"** tab
2. Set the notification email to: `cvadmin@clearvisionleader.com`
3. Save the settings

## Step 5: Update the Code

1. Open the file: `src/lib/formspree.ts`
2. Replace the placeholder with your actual Formspree endpoint:

```typescript
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

Change `YOUR_FORM_ID` to your actual form ID.

## Step 6: Optional - Customize Email Template

In Formspree settings, you can customize the email template to format the assessment results nicely:

1. Go to **"Email"** tab in your form settings
2. Customize the subject line: `New P3 Assessment from {{name}}`
3. Save changes

## Step 7: Test the Integration

1. Run `npm run build` to build the project
2. Deploy the `dist` folder to your WordPress site
3. Complete a test assessment
4. Check that you receive the email at cvadmin@clearvisionleader.com

## What Gets Sent

Each submission includes:
- **Name**: Lead's full name
- **Email**: Lead's email address
- **Phone**: Lead's phone number
- **Total Score**: Overall assessment score (out of 54)
- **Pause Score**: Percentage score for Pause dimension
- **Plan Score**: Percentage score for Plan dimension
- **Proceed Score**: Percentage score for Proceed dimension
- **Profile Title**: Leadership profile classification
- **Profile Description**: Detailed profile description
- **Pause Insight**: Insight for Pause dimension
- **Plan Insight**: Insight for Plan dimension
- **Proceed Insight**: Insight for Proceed dimension
- **Prescription**: Recommended next steps
- **Detailed Responses**: JSON of all question responses

## Troubleshooting

### Form submissions not working?
- Verify your Formspree endpoint is correctly set in `src/lib/formspree.ts`
- Check your browser console for errors
- Make sure your Formspree form is active

### Not receiving emails?
- Check spam/junk folder
- Verify email address in Formspree settings
- Check your Formspree dashboard to see if submissions are being recorded

### Formspree free plan limitations
- 50 submissions/month on free plan
- Upgrade to a paid plan if you need more submissions
- Paid plans start at $10/month for 1,000 submissions

## Production Deployment

Once configured:
1. Run `npm run build`
2. Upload the entire `dist` folder to your WordPress site
3. The assessment will work as a standalone static site
4. No backend server or database required
