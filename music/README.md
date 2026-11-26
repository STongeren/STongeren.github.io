# Background music

`playlist.json` decides what plays. Three forms work:

One YouTube mix with chapters (each song starts at its timestamp in the video):

```json
{
  "youtube": "VIDEO_ID",
  "tracks": [
    { "title": "LEASE", "artist": "makruzyy", "start": "53:03" },
    { "title": "Submarine Theme", "artist": "ConcernedApe", "start": "54:50" }
  ]
}
```

One YouTube video per song:

```json
[ { "title": "LEASE", "artist": "Takeshi Abo", "youtube": "VIDEO_ID" } ]
```

Your own mp3 files in this folder:

```json
[ { "title": "LEASE", "artist": "Takeshi Abo", "file": "lease.mp3" } ]
```

YouTube plays through YouTube's own embed player, so the uploader's rules apply (some videos
cannot be embedded). With nothing listed, the site plays its own synthesised tune.
