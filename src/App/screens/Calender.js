import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object to the
// correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
const events = [
    {
        id: 0,
        title: 'Board meeting',
        start: new Date(2018, 0, 29, 9, 0, 0),
        end: new Date(2018, 0, 29, 13, 0, 0),
        resourceId: 1
    }, {
        id: 1,
        title: 'MS training',
        start: new Date(2018, 0, 29, 14, 0, 0),
        end: new Date(2018, 0, 29, 16, 30, 0),
        resourceId: 2
    }, {
        id: 2,
        title: 'Team lead meeting',
        start: new Date(2018, 0, 29, 8, 30, 0),
        end: new Date(2018, 0, 29, 12, 30, 0),
        resourceId: 3
    }, {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2018, 0, 30, 7, 0, 0),
        end: new Date(2018, 0, 30, 10, 30, 0),
        resourceId: 4
    }
]

const resourceMap = [
    {
        resourceId: 1,
        resourceTitle: 'Board room'
    }, {
        resourceId: 2,
        resourceTitle: 'Training room'
    }, {
        resourceId: 3,
        resourceTitle: 'Meeting room 1'
    }, {
        resourceId: 4,
        resourceTitle: 'Meeting room 2'
    }
]
const MyCalendar = props => (
    <div>
        <BigCalendar
            events={events}
            resources={resourceMap}
            resourceIdAccessor="resourceId"
            resourceTitleAccessor="resourceTitle"
            defaultView="week"
            views={['day', 'week']}
            startAccessor='startDate'
            endAccessor='endDate'
            defaultDate={new Date()}/>
    </div>
);
export default MyCalendar;