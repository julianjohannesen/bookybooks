# Google API Resources

First, you need to register any app that uses Google's API. You can do that and manage those apps and services at the Google Developer Console:

https://console.developers.google.com/apis/dashboard?project=chingu-pre-work-021919

There are 3 sets of resources:
1. One for the auth API
2. One for the books API
3. One for the Google JavaScript Client

# 1. Using the Auth API

## API Explorer

This is a tool you can use with any API. It allows you to test out calls to any Google API, unauthorized or authorized: 
https://developers.google.com/apis-explorer/#p/books/v1/

## OAuth Overview

The Google Identity Platform's overview of OAuth2, including a brief overview for client-side web applications:

https://developers.google.com/identity/protocols/OAuth2

## OAuth Details for JavaScript Web Apps

A detailed account of how to use Google's Identity Platform with client-side web applications.

https://developers.google.com/identity/protocols/OAuth2UserAgent

## The Developer's OAuth2.0 Playground

https://developers.google.com/oauthplayground

### There's also the Google Sign-In for Website

Google sign-in is a service that allows users to sign in to your app using their google account. It can be implement with just a few lines as you can see on the [introductory page](https://developers.google.com/identity/sign-in/web/).

#### Google Sign-in JavaScript Client Reference

This reference is helpful, because many of the methods talked about also appear in other APIs.
https://developers.google.com/identity/sign-in/web/reference

#### Videos from Google Chrome Developers YouTube Channel on Sign-in

https://www.youtube.com/user/ChromeDevelopers/search?query=signin

# 2. Using the Google Books API

The primary resources for using the books API is here:
https://developers.google.com/books/docs/v1/using

The associated pages include the "Getting Started Guide," a guide to "Performance Tips," and some "Branding Guidelines." There are a couple of other things, but these are the most useful.

# 3. The Google JavaScript Client

Google's client allows developers to load, initialize, and make calls to any Google API, while handling many of the nitty gritty details for us.

## The Google API Javascript Client (gapi) repository

This the repo site, which has a lot of documentation not found on the Google site itself.
https://github.com/google/google-api-javascript-client

There are links to pages on getting started, using auth, batching, CORS, discovery documents, an FAQ, using promises, an API reference, and sample code.
