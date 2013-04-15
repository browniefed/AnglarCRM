# AnglarCRM
---
(based on angular express seed initially)
Anglar is a CRM with simple principles. It's aim is to build custom, and effective business flows that will help companies be more profitable.
It leverages Node.js, MongoDB(probably something else later), and AngularJS to build a real time, single page, crm with custom business flows.
It will be built using a custom command line builder that generates various flat files that are then compiled into a web application, phonegap mobile app(android, iphone), and eventually a desktop application.
With the non-stop publishing of NPM modules, the hope is to repackage them into a pluggable module architecture.

###TODO Technical
*Build a command line tool to generate appropriate files
*Build a processor to generate the web app and phonegap application (changes designs and navigation and modules to work on mobile)
*Pick a better more production ready NoSQL database (Mongo is great I just don't trust it)

###TODO For me
*Learn Node.js better
*Learn AngularJS better
*Get off my ass and convert some necessary NPM modules to utilize promises instead

###TODO Roadmap (there is a lot and this isn't organized yet)
*Navigation
**Breadcrumbs
**Responsive
**Mobile
**Compile on the fly adjust for user permissions
*Design
**Changeable themes / Color schemes
***Modules must be built with SASS/Compass to take advantage
*Shortcuts/Custom Business Flows
**Build into the core the idea of quick flows that need to be changed based upon user group + permissions + other factors
*Lists
**Create saveable list views
**Quick grouping of data for better viewing
**Quick data sorting
**Pre built filters + hidden filters
*Forms
**Custom form fields
**Need to be generated for different user permissions
***Compile forms on the fly adjust for user permissions
***Need not just show different form fields for different user groups or users but also adjust validations, and the form module as a whole
*Search
**Global search (search for anything, anywhere)
**Allow users, or platform level to define searches and how the results should be formatted
*Alerts/Notifications
**Real time , growl style(maybe) or notifcation bar
**Notifications stay there like facebook
**When certain users need to get informed via email, push or websocket that some observable state (form field, add record, edit record, etc) has changed
*3rd party libraries + integrations
*Dashboard home
**User customizeable or forced dashboard pages
*Diary concept
**A global note taking, user interaction, task, email, and other concepts that can relate to anything or nothing
*Tab system
**Quick tabs on each page
**Subset of nav?
*Code table
**Definable codes by the user or set at system level
*External view
**Have landing pages for external users
**Simple but customizeable
**Limited interaction and control
*Payment system
**Integrate any payment platform
**Relate payment to anything concept
**Work with the invoicing system
*Invoice
**Default invoicing
**Understands what a line item is and totals + taxes from payment system
**Create custom templates built for th ebusiness
*Reports + charting
**Create printable reports and charts
**Export to PDF, quickly email, or build power points
*Export functionality
**Ability to export any list, form, or chart
**Execel,CSV, PDF, Img
**Incorporate various 3rd party to turn documents into different types
*Customers
**Merge concept
*Companies
*Scheduleable scripts / processes
**Admin, creator generated
**User generated (very simple things)
*API
**Auto generated API
**OAuth
**Public, private, and mobile
*Login types
*Easy error logging, notifications to Admin via Email + text
*Record locking
**Checkout system/record locking for a set period of time
*Status messages
**Success,error,notifcations on validations and other things
*Delivery concept
**Deliver a generated report via email, fax, texts, print, or 3rd party mail
*Data importr
**Somesort of CSV, XLSX data importer
*User licesnsing
*Mapping
**Geo spatial built into the platform for every record
**Turn on and off
**Create business flows based on geography
**Just simple mapping functionality with google maps, or Openstreet, or other mapping platform
*Sessions
**Timeout security
*Phone call service integrations
**Shoretell
**Ring central
*Outlook integration
*Ecommerce + store
**Inventory management
**Broad product module
*Quickbook integration
*Change tracking
**Track changes and return lists/reports that are easily read by humans
**Must incorporate permissions
*Scalability
**Sharding?
**Redis for sessions
*IL8N support
**Dynamic served by node
**Implemeneted by Angular front end
*Calendar system
**Calendar anything
**Integrate calendar with 3rd party
**Auto view customer interactions on calendar
*Audio/Video
**Not that important but possible
*Chat system
**Different chat rooms
**Connect differently based on user permissions
**Embeddable documents
**Share documents quickly between people you need to
**Quick edits
*Contact system
**Relate to customers, companies, other contacts, products, invoices, anything
**Pull in contacts automatically from outlook, gmail, etc
**Quick research, use name, email, and info to find on linkedin, twitter, facebok and generate report
*Custom service aspect
*User bug report to admin
*Employee tracking system
**Use websockets to track users, what page they're on, how long they're on it
**Generate reports on users
*Conditional redirecting
**On new record
**On editing a record
**Based on permissions
*Record experation
**Define record experations before it's flag turns to isDel = 1
*File repository
**Built in with diary possibly
**Folder systm
**Relate to anything
*Meeting manager + reminder
*Polls
*Teams
*Support cases
*Send a chat to a saved chats section (wtf is this, why did I write this in my notebook)
*Email
**Email templating
**Mail chimp or other 3rd party integration
*Custom integrations
*User added custom fields
*Project management + teams
*Cross platform HTMl5 (phonegap cordova) generator
**Must adjust design and menu navigation
**Adjust modules, uploader to be able to grab from file system on phone
*Ebay
*Fedex
*Social channel integration
*Rename fields/navigation concept on per user basis
*Quick record viewing
**Call them gists or something
**Can select info that is shown on gists
**Kind of like a card system
*Timeline display
**Build this in with calendar
*Priority concept
**High priority get notifications when a defined area is viewed
*GPS Tracking
**Watch users on their phones
**Leverage geospatial data(maybe address lookup then get gps coords with google) to create effective field service work days
*Field Service concept
**Very powerful if compileable to any mobile device
**Incorporate geo spatial
**Days off + time off
**Appointment scheduling
**Service specialities, skills
**Goback reports
**Timetracking on each job
**Double booking + triple booking concept
**Customers can view the external profile of person on the job
*Time tracking
**Track each users looking at a page
**Adding, editing, track what they do
*Multi-tenant
**Build app styles then re-compile for specific purposes
**Primary focus is on the field service
*Image upload + tagging
**Mobile uploading
**Tag areas in the photo (squares or user defined shapes they draw)
**Tag info
**Tag coordinates
**Export images in reports, etc
*Connection screen
**Show all 3rd party connections
*Quick email report
**Need a report fast via email, verified emails can get reports quick generated for them
*Email server integration
**All emails accessible by CRM