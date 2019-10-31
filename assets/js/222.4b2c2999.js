(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{514:function(e,t,a){"use strict";a.r(t);var r=a(43),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure storage account overview"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"what-s-the-purpose-of-etag-in-azure-storage-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-the-purpose-of-etag-in-azure-storage-table","aria-hidden":"true"}},[e._v("#")]),e._v(" What's the purpose of ETag in Azure Storage Table?")]),e._v(" "),a("p",[e._v("In case you are new to the Azure Storage Tables, we've reviewed the following items so far:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip82.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating your first Azure Storage Table"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip83.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adding an item to a Azure Storage Table"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip84.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reading an item from a Azure Storage Table"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip85.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Updating an item from a Azure Storage Table"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip86.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deleting an item from a Azure Storage Table"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip86.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ensure a clean RowKey in Azure Storage Table"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip88.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("What's the purpose of ETag in Azure Storage Table?"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"what-is-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-it","aria-hidden":"true"}},[e._v("#")]),e._v(" What is it?")]),e._v(" "),a("p",[e._v("There is a lot of confusion around "),a("strong",[e._v("ETag")]),e._v(" and I thought I'd stop for a moment to help clear this up.")]),e._v(" "),a("p",[e._v("An "),a("strong",[e._v("ETag")]),e._v(" property is used for optimistic concurrency during updates. It is not a timestamp as there is another property called "),a("strong",[e._v("TimeStamp")]),e._v(" that stores the last time a record was updated. For example, if you load an entity and want to update it, the ETag must match what is currently stored. This is important b/c if you have multiple users editing the same item, you don't want them overwriting each other's changes.")]),e._v(" "),a("h4",{attrs:{id:"a-practical-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-practical-example","aria-hidden":"true"}},[e._v("#")]),e._v(" A Practical Example")]),e._v(" "),a("p",[e._v("Bob and David load an edit page on a website at the same time. Bob changes a value for Description and saves the item. After David has had the form open for a while  and makes a change to a unrelated field such as the URL and unknowingly the outdated Description is being saved with their update. David does not know they are discarding a change by Bob unless you alert him. So what you should do is show an error that Bob has changed it already and ask if they sure they want to overwrite Bob's changes or if they want to see those changes first.")]),e._v(" "),a("p",[e._v("This is accomplished by both Bob and David storing the ETag from when the record was loaded. When each user attempts a save you can pass that ETag to the server with the updated data and see if they match. Every change to a record updates the ETag stored for that record. So when David tries to save the ETag that is conflicting, then it won't match and you can handle what should be done.")]),e._v(" "),a("p",[e._v("If you don't care that David's changes may overwrite Bob's changes, then you can pass \"*\" with the save and Azure won't give an error when the ETag does not match.")]),e._v(" "),a("p",[a("em",[e._v("Original credit goes to Michael Lang for this example, I've made minor tweaks to help folks understand it better.")])])])},[],!1,null,null,null);t.default=o.exports}}]);