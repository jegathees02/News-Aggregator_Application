package main.java.model;

import java.util.*;
public class Event {
    private String event_id;
    private String event_name;
    private String event_type;
    private Date event_date;
    private String event_venue;
    private int capacity;
    private int tot_normal;
    private int tot_vip;

    
    public Event() {

    }


    public Event(String event_id, String event_name, String event_type, Date event_date, String event_venue,
            int capacity,int tot_normal, int tot_vip) {
        this.event_id = event_id;
        this.event_name = event_name;
        this.event_type = event_type;
        this.event_date = event_date;
        this.event_venue = event_venue;
        this.capacity = capacity;
        this.tot_normal = tot_normal;
        this.tot_vip = tot_vip;
    }


    public String getEvent_id() {
        return event_id;
    }


    public void setEvent_id(String event_id) {
        this.event_id = event_id;
    }


    public String getEvent_name() {
        return event_name;
    }


    public void setEvent_name(String event_name) {
        this.event_name = event_name;
    }


    public String getEvent_type() {
        return event_type;
    }


    public void setEvent_type(String event_type) {
        this.event_type = event_type;
    }


    public Date getEvent_date() {
        return event_date;
    }


    public void setEvent_date(Date event_date) {
        this.event_date = event_date;
    }


    public String getEvent_venue() {
        return event_venue;
    }


    public void setEvent_venue(String event_venue) {
        this.event_venue = event_venue;
    }


    public int getCapacity() {
        return capacity;
    }


    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
    public int getTot_normal() {
        return tot_normal;
    }
    public void setTot_normal(int tot_normal) {
        this.tot_normal = tot_normal;
    }

    public int getTot_vip() {
        return tot_vip;
    }
    
    public void setTot_vip(int tot_vip) {
        this.tot_vip = tot_vip;
    }
    
    @Override
    public String toString() {
        return "Event ID: " + event_id +
               "\nEvent Name: " + event_name +
               "\nEvent Date: " + event_date +
               "\nEvent Venue: " + event_venue +
               "\nEvent Date: " + event_date +
               "\nCapacity: " + capacity + "\n";
    }

    

    
    
}
