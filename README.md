# _Music Lessons_

#### By _**Lisa Primeaux-Redmond**_

#### _Music Lessons is a digital instrument and teaching tool. This EdTech app was built for use in introduction to music or music theory classes lacking instruments and other necessary resources for students._

## Technologies Used

* _HTML_
* _CSS_
    * _CSS Grid Layout_
    * _Styled Components_
* _Javascript_
    * _Regex_
    * _React_
    * _VexFlow library_
    * _Audio Context_
* _Ruby_
    * _Rails_
    * _Active Model Serializer_
* _PostgreSQL_

## Description

_Use of the website begins with a teacher login or signup action. Once logged in, teachers are taken to a dashboard where they have the option of music demonstration or classroom management._

_In the music demonstration section, teachers can see a digital piano with piano keys labeled and mapped to computer keyboard keys. To begin, the teacher clicks in the input box, which activates the audio, and then plays music using keyboard presses. With each key press a corresponding sound is played and a note is rendered live on sheet music on the screen. Playing an entire song is documented in the sheet music and played aloud for the user to hear. With the press of a button, the music input box can be cleared, which will also clear the sheet music, for new songs. The sheet music and piano sound will only function for a full C4 octave, with keyboard keys C, D, E, F, G, A, and B corresponding to piano notes C, D, E, F, G, A, and B and keyboard key O corresponding to the second and final C in the octave. The user can also backspace anywhere in the input box which will remove the deleted note from the sheet music and allows the user to fix errors._

_In the classroom section, the teacher can create student accounts. Teachers also have the option to edit and delete existing students and view student work in the form of saved songs. This allows the teacher to give music assignments to students and to check their sheet music for grading._ 

_Once a teacher creates student accounts, students can also log in to the website. Students are taken to a different dashboard where they are given the option to make music or view their saved songs. In the music section, they have the same functionality as teachers but are also allowed to save songs they create. By clicking the save button, the student is prompted to give the song a title before saving. Once the song is saved, the student can view their songs in the songs section of their dashboard._

_In the songs sections of the student dashboard, students see a list of their saved songs. With a click of a button the sheet music for each song can be displayed._

## Known Bugs

* _In the music section, using the backspace key to delete a note at the start of a new measure breaks the page. (This feature otherwise works as long as it is not at the start of a measure.)_
* _In the music section, typing a note that is not in the C4 octave at the start of a new measure breaks the page. (This feature otherwise works as long as it is not at the start of a measure.)_


## Future Iterations

* _Adjust design and layout to better accommodate different screen sizes and serve as a more mobile friendly version_
* _Allow user to select custom time signature and different note counts (half notes, whole notes, etc.) using a music toolbar_
* _Render sheet music when piano is played using mouse clicks in addition to keypress events_ 
* _Allow the user to click a play button on saved songs and hear the piano note sounds matching the sheet music_
* _Wrap sheet music to multiple lines when it becomes too long to fit into across one screen width_ 
* _Allow the teacher to sort and filter student lists and student song lists_
* _Create a metronome that can play at the same time as piano note sounds_
* _Allow user to select from multiple instrument options such as guitar or horn_
* _Render optional guitar tablature instead of sheet music when guitar is the chosen instrument_
* _Create drum beat loop that can be overlaid with other instrument sounds and set to a selected time signature_
* _Allow user to overlay voice recordings with saved music creations_
* _Allow user to connect and use MIDI instruments with all music section functionality_

