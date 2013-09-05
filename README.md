# refactor-temp

> Temporary, repo to plan and discuss refactoring Assemble. This project is a WIP and will change often.

Assemble's job is to:

1. Make it easy for designers and developers work with reusable templates and data
2.


## Core Concepts

Metadata (or just "data") and content are first class citizens in Assemble. At a high level, all files consist of these two fundamental components:

* Metadata: the information about a file
* Content: the information inside a file

While using Assemble _it may help to think of a file as a box sitting on a shelf, being prepared for shipment_. Metadata can then be thought of as information about the box and its contents, the labeling that describes the contents therein, or the packing slip that tells Assemble where the box should go. Content, on the other hand, is what is inside the box itself.

## Overview

Assemble provides methods for working with both metadata and content.

todo...


## Metadata

Metadata is often described as "data about the data". While using Assemble it might help to think of metadata as the "brain" of a file, the place where structured data about a file is stored. YAML front-matter, or YFM, is often used for this purpose, but "external" data formats, such as JSON or YAML, may also be used.

Metadata generally invisible to the end-user and is really only useful to the developer or application working with the file. For instance, you might use YAML front matter for storing information about a file, such as a title, description and keywords, before it compiled into a web page. Once compiled, all of the metadata that was previously separate from the content will now be either merged into the content of the page itself, or consumed by the build process in cases where certain information was only required to inform the build system of what to do with the file.

## Content

Content, the "heart" of a file, is where the


## Methods

Methods for getting information about files.

* `file`|`page`
* `data`|`metadata`



### Types of Content

* Pages
* Partials or includes
* Layouts




## Middleware

todo...

## Steps

* `Steps`:

todo...

## Engine

* `Engine.options`: `Engine.ownOptions`
* `Engine.load`:
* `Engine.init`:

* `Engine.compile`:
* `Engine.parse`:
* `Engine.render`:

* `Engine.helpers`:
* `Engine.partials`:


