clockifyButton.render('#fastactionsbar:not(.clockify)', { observe: true }, function (elem) {
   ticketId = $('#ticketdetailsbar > div > table > tbody > tr > td > span:nth-child(2)').innerText;
   ticketSubject = $('#ticketsubject').innerText;
   ticketType = $('#titledataleft span.Ctype').innerText;

   link = clockifyButton.createButton({
      description: ticketId + " - " + ticketSubject,
      projectName: ticketType,
      taskName: 'Operations',
      tagNames: ['Ticket LANSweeper']
   });

   link.style.verticalAlign = 'middle';
   elem.append(link);
});