#!/usr/bin/env python3
"""
Guest List Generator from CSV
Convert guest list from Excel/CSV to guests.json
"""

import csv
import json
import sys
import os

def csv_to_guests_json(csv_file):
    """
    Convert CSV file to guests.json format
    
    CSV should have at least one column with guest names
    First row can be header, will be skipped if it contains common header words
    """
    
    guest_names = []
    
    try:
        with open(csv_file, 'r', encoding='utf-8') as f:
            csv_reader = csv.reader(f)
            
            # Read all rows
            for idx, row in enumerate(csv_reader):
                if not row or not row[0].strip():
                    continue
                
                # Skip header row if detected
                if idx == 0 and any(word in row[0].lower() for word in ['name', 'guest', 'id', 'email']):
                    continue
                
                # Get first column as guest name
                name = row[0].strip()
                if name:
                    guest_names.append(name)
        
        # Sort alphabetically
        guest_names.sort()
        
        # Remove duplicates
        guest_names = list(dict.fromkeys(guest_names))
        
        # Create JSON structure
        data = {"guests": guest_names}
        
        # Write to guests.json
        with open('guests.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        print(f"✅ Success!")
        print(f"   Added {len(guest_names)} guests to guests.json")
        print(f"   Guests: {', '.join(guest_names[:5])}{'...' if len(guest_names) > 5 else ''}")
        
    except FileNotFoundError:
        print(f"❌ File not found: {csv_file}")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 csv_to_guests.py <your_guest_list.csv>")
        print("\nExample:")
        print("  python3 csv_to_guests.py guests.csv")
        print("\nYour CSV file should have guest names in the first column")
        sys.exit(1)
    
    csv_to_guests_json(sys.argv[1])
