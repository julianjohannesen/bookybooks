# Google Books API Notes

## Primary Reference
https://developers.google.com/books/docs/v1/using

## URL Parameters

VolumeID is id
BookshelfID is as_coll
UserID is uid
Filter is filter (when making a query) and options are partial, full, free-ebooks, paid-ebooks, ebooks
startIndex is used in pagination of results
maxResults is the max number of books to return, default is 10, max 40
project can be full or lite and means full metadata or partial
orderedBy - sorting can be relevance or newest

### Get a user's bookshelves and the books on those shelves
Mostly read about this in the books api docs, but read about some of it here: https://developers.google.com/books/docs/v1/reference/bookshelves/list

The endpoint for a user's public bookshelves:
https://www.googleapis.com/books/v1/users/userId/bookshelves

The endpoint for all of a user's bookshelves:
https://www.googleapis.com/books/v1/mylibrary/bookshelves

The endpoint for books on a user's shelves:
https://www.googleapis.com/books/v1/mylibrary/bookshelves/shelf/volumes

The response will look like this:
    {
        "kind": "books#bookshelves",
        "items": [
          bookshelf Resource
        ]
     }

Longer form:

{
 "kind": "books#bookshelves",
 "items": [
  {
   "kind": "books#bookshelf",
   "id": 0,
   "selfLink": "https://www.googleapis.com/books/v1/users/1112223334445556677/bookshelves/0",
   "title": "Favorites",
   "access": "PRIVATE",
   "updated": "2011-04-22T04:03:15.416Z",
   "created": "2011-04-22T04:03:15.416Z",
   "volumeCount": 0,
   "volumesLastUpdated": "2011-04-22T04:03:17.000Z"
  },

#### Bookshelf IDs:
    Favorites: 0
    Purchased: 1
    To Read: 2
    Reading Now: 3
    Have Read: 4
    Reviewed: 5
    Recently Viewed: 6
    My eBooks: 7
    Books For You: 8 If we have no recommendations for the user, this shelf does not exist.
    Custom shelves have IDs greater than 1000

## Available endpoints (from API playground):
Services > Books API v1
Authorize requests using OAuth 2.0:

books.bookshelves.get - Retrieves metadata for a specific bookshelf for the specified user.
books.bookshelves.list - Retrieves a list of public bookshelves for the specified user.
books.bookshelves.volumes.list - Retrieves volumes in a specific bookshelf for the specified user.

books.cloudloading.addBook	
books.cloudloading.deleteBook - Remove the book and its contents
books.cloudloading.updateBook	

books.dictionary.listOfflineMetadata - Returns a list of offline dictionary metadata available

books.familysharing.getFamilyInfo - Gets information regarding the family that the user is part of.
books.familysharing.share - Initiates sharing of the content with the user's family. Empty response indicates success.
books.familysharing.unshare	- Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

books.layers.annotationData.get	- Gets the annotation data.
books.layers.annotationData.list - Gets the annotation data for a volume and layer.
books.layers.get - Gets the layer summary for a volume.
books.layers.list - List the layer summaries for a volume.
books.layers.volumeAnnotations.get - Gets the volume annotation.
books.layers.volumeAnnotations.list	- Gets the volume annotations for a volume and layer.

books.myconfig.getUserSettings - Gets the current settings for the user.
books.myconfig.releaseDownloadAccess - Release downloaded content access restriction.
books.myconfig.requestAccess - Request concurrent and download access restrictions.
books.myconfig.syncVolumeLicenses - Request downloaded content access for specified volumes on the My eBooks shelf.
books.myconfig.updateUserSettings - Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

books.mylibrary.annotations.delete - Deletes an annotation.
books.mylibrary.annotations.insert - Inserts a new annotation.
books.mylibrary.annotations.list - Retrieves a list of annotations, possibly filtered.
books.mylibrary.annotations.summary	- Gets the summary of specified layers.
books.mylibrary.annotations.update	- Updates an existing annotation.

books.mylibrary.bookshelves.addVolume - Adds a volume to a bookshelf.
books.mylibrary.bookshelves.clearVolumes - Clears all volumes from a bookshelf.
books.mylibrary.bookshelves.get	- Retrieves metadata for a specific bookshelf belonging to the authenticated user.
books.mylibrary.bookshelves.list - Retrieves a list of bookshelves belonging to the authenticated user.
books.mylibrary.bookshelves.moveVolume - Moves a volume within a bookshelf.
books.mylibrary.bookshelves.removeVolume - Removes a volume from a bookshelf.
books.mylibrary.bookshelves.volumes.list - Gets volume information for volumes on a bookshelf.

books.mylibrary.readingpositions.get - Retrieves my reading position information for a volume.
books.mylibrary.readingpositions.setPosition - Sets my reading position information for a volume.

books.notification.get - Returns notification details for a given notification id.

books.onboarding.listCategories	- List categories for onboarding experience.
books.onboarding.listCategoryVolumes - List available volumes under categories for onboarding experience.

books.personalizedstream.get - Returns a stream of personalized book clusters

books.promooffer.accept	
books.promooffer.dismiss	
books.promooffer.get - Returns a list of promo offers available to the user

books.series.get - Returns Series metadata for the given series ids.
books.series.membership.get	- Returns Series membership data given the series id.

books.volumes.associated.list - Return a list of associated books.
books.volumes.get - Gets volume information for a single volume.
books.volumes.list - Performs a book search.
books.volumes.mybooks.list	- Return a list of books in My Library.
books.volumes.recommended.list - Return a list of recommended books for the current user.
books.volumes.recommended.rate - Rate a recommended book for the current user.
books.volumes.useruploaded.list	- Return a list of books uploaded by the current user.