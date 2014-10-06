Sprawsm Discussion 
==================

An easy way to add Disqus comments to your mockups so that you can comment on it within the context of the mockup itself.

The idea for this *hack* came about when we got tired of discussing designs in disconnected apps, like Basecamp. We wanted our customers to be able to provide feedback while they are looking at the mockup itself. 

[Disqus][1] comments seemed like a perfect solutions to this as they are easily embeddable, and allow image attachments which are indispensable when you are trying to get your point across. 

Of course the use of this little widget isn't limited to design discussions. Feel free to use it however you see fit. 

How To Use 
----------

### 1. Set Up Disqus

First of all, you will need a [Disqus][1] account. We recommend opening a separate account tied to your company email. 

Next thing you need to do is to [register a site][2] with them, which basically means you are setting up the comments backend for the project you want to include the comments in. You only need to register one site, and you can use the same embed code on as many pages as you'd like. 

Feel free to name the site however you'd like, we usually go with “[project_name] Design Discussion”. This is totally irrelevant. 

Than you will get a chance to choose your site's Disqus URL, which is **very important** and you need to remember it. The Disqus folks also call it “site shortname”. 

You are also able to choose a category but that's largely irrelevant for this use case. 

At this point you are pretty much all set since all we really need is the site shortname, but let's check out some other settings of the newly created discussion site. 

In your Disqus site settings you will be able to adjust some settings to your liking, and we suggest you take notice of the following options (all in the General category): 

1. Set the **default sorting** to *newest first* 
2. *Uncheck* the **discovery** option (you probably don't want people finding your discussions randomly) 
3. *Check* the **guest commenting** so your customers don't neet to register for a Disqus account in order to comment on your mockups 
4. Make sure **media attachments** are *enabled* 

### 2. Embed the Code 

Getting the comments into your mockup pages is really easy. We are going to assume that you are using this for an HTML mockup/template, but if you'd like to use it for image-based mockups all you need to do is create a web page containing your mockup as an image, than embed the code into that page. 

First thing's first: [download the package of check it out from GitHub][3] (look for the “Download ZIP” button). Once you've done that, unzip the archive and you will find the demo page, and the folder called “build”. This folder contains the files that we need. 

Before we move to the embed code, you need to make sure you have the latest version of [jQuery][4] included. If you don't feel free to paste this line of code directly before the closing `body` tag of your mockup HTML page: 

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

Next thing you need to do is take the following code and paste it into your mockup HTML page also right before the closing `body` tag, but **after** the jQuery include: 

        <script type="text/javascript" src="path/to/build/jquery.sprawsm-discuss.min.js"></script>
    
        <script type="text/javascript">
    
        // Your Disqus site shortname
        var disqus_shortname = 'yourshortname';
      
        // Unique discussion ID
        var disqus_identifier = 'yourdiscussionid';
    
        // Path to stylesheet 
        // If you are using a relative path, make sure it's relative to 
        // jquery.sprawsm-discuss.js file and not this document
        var sd_path = 'path/to/build/sprawsm-discuss.css'
    
    </script>

Let's take a moment to analyze the lines you will need to edit: 

    <script type="text/javascript" src="path/to/build/jquery.sprawsm-discuss.min.js"></script>

Make sure to input the correct path to the file `jquery.sprawsm-discuss.min.js`, depending where you have uploaded it on your webserver or hard drive. 

    var disqus_shortname = 'yourshortname';

This is your Disqus site shortname, and you can get it from your Disqus profile. 

    var disqus_identifier = 'yourdiscussionid';

This is the part that tells Disqus how to link up your page with the appropriate comment thread. Just make sure that you have a unique identifier per mockup, and you will be fine. 

    var sd_path = 'path/to/build/sprawsm-discuss.css'

This is the style sheet that adds the design to the whole thing. It's important to note that this path should be either absolute, or if you're using a relative path, make sure it is relative to the jquery.sprawsm-discuss.min.js file, and **not** your HTML page. 

If you've done everything correctly, your somment should load without a problem.

### File Hosting 

If you don't have a web server or simply don't want to go through the hassle of hosting the files yourself, feel free to link directly to the files hosted by us: 

jquery.sprawsm-discuss.min.js: 

    https://s3.amazonaws.com/sprawsm/sprawsm-discussion/jquery.sprawsm-discuss.min.js 

sprawsm-discuss.css: 

    https://s3.amazonaws.com/sprawsm/sprawsm-discussion/sprawsm-discuss.css

Terms of Usage 
==============

This code is provided as-is, without any warranty or guarantees. Sprawsm doo can not be held responsible for any damage or breach of privacy you may face by using this code. Sprawsm doo is not affiliated with Disqus in any way, we just like their awesome product. 

[1]: http://disqus.com/
[2]: https://disqus.com/admin/create/
[3]: https://github.com/sprawsm/sprawsm-discussion
[4]: http://jquery.com/
