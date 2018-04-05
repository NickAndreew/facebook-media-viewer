const AlbumsAPI = {
    albums: [
      { number: 1, name: "Album1"},
      { number: 2, name: "Album2"},
      { number: 3, name: "Album3"},
      { number: 4, name: "Album4"},
      { number: 5, name: "Album5"},
      { number: 6, name: "Album6"}
    ],
    all: function() { return this.albums},
    get: function(id) {
      const isAlbum = a => a.number === id
      return this.albums.find(isAlbum)
    }
  }
  
  export default AlbumsAPI;