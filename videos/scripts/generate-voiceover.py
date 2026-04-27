"""
Chatterbox TTS voiceover generator for LetsVibeAI course videos.

Generates WAV audio files for each section of a video script.
Saves output to public/voiceover/ for Remotion to consume.
"""

import os
import sys
import json
import argparse
from pathlib import Path

# Silence HuggingFace warnings
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"
os.environ["TRANSFORMERS_VERBOSITY"] = "error"

def generate_voiceover(sections: list[dict], output_dir: str, voice: str = "default"):
    """Generate TTS audio for each section of a video."""
    from chatterbox import ChatterboxTTS
    
    print("Loading Chatterbox TTS model (first load downloads weights)...")
    tts = ChatterboxTTS.from_pretrained(device="mps" if os.path.exists("/System/Library/CoreServices") else "cpu")
    print("Model loaded.")
    
    os.makedirs(output_dir, exist_ok=True)
    
    metadata = []
    for i, section in enumerate(sections):
        section_id = section["id"]
        text = section["text"]
        filepath = os.path.join(output_dir, f"{section_id}.wav")
        
        print(f"[{i+1}/{len(sections)}] Generating: {section['title']} ({len(text)} chars)...")
        
        # Generate audio
        audio = tts.generate(
            text=text,
            repetition_penalty=1.1,
            min_p=0.05,
            top_p=0.9,
            temperature=0.7,
        )
        
        # Save as WAV
        import soundfile as sf
        sf.write(filepath, audio, 24000)
        
        # Get duration in seconds
        duration_sec = len(audio) / 24000
        print(f"  -> Saved: {filepath} ({duration_sec:.1f}s)")
        
        metadata.append({
            "id": section_id,
            "title": section["title"],
            "file": f"voiceover/{section_id}.wav",
            "duration_sec": round(duration_sec, 2),
        })
    
    # Save metadata for Remotion
    meta_path = os.path.join(output_dir, "..", "voiceover_manifest.json")
    with open(meta_path, "w") as f:
        json.dump(metadata, f, indent=2)
    print(f"\nManifest saved: {meta_path}")
    return metadata


# ── Default Script: GTM Email Automation ──

GTM_EMAIL_AUTOMATION_SCRIPT = {
    "title": "GTM Email Automation with Make.com",
    "fps": 30,
    "sections": [
        {
            "id": "intro",
            "title": "Introduction",
            "text": (
                "Go-to-market email automation is one of the most powerful tools "
                "in a modern sales professional's toolkit. In this lesson, you'll learn "
                "how to build an automated cold email outreach pipeline using Make.com "
                "and Resend. By the end, you'll have a working system that finds "
                "uncontacted leads, sends personalized emails, and tracks every interaction, "
                "all running on autopilot."
            ),
        },
        {
            "id": "what_is_gtm",
            "title": "What Is GTM Engineering",
            "text": (
                "GTM, or Go-to-Market engineering, is the practice of building AI-powered "
                "automation systems for sales and marketing. It represents a fundamental shift: "
                "sales professionals are no longer just sending emails and making calls. "
                "They are Go-to-Market Engineers who design systems using AI and automation "
                "to scale their outreach. This discipline combines sales strategy, "
                "email deliverability knowledge, and technical automation skills. "
                "In increasingly competitive markets, GTM engineering gives you a massive "
                "advantage by letting software handle repetitive tasks while you focus "
                "on building relationships."
            ),
        },
        {
            "id": "architecture",
            "title": "Architecture Overview",
            "text": (
                "Here's the pipeline we're building. It starts with a Google Sheet "
                "containing your lead data. Make.com searches for rows where the prospect "
                "has an email but hasn't been contacted yet. It filters those rows, "
                "sends a personalized email through the Resend API, waits three seconds "
                "to avoid throttling, and then updates the sheet with a timestamp and status. "
                "This cycle repeats on a schedule, processing one lead at a time. "
                "The beauty of this architecture is its simplicity. Each component has a single "
                "responsibility, making it easy to debug and extend later."
            ),
        },
        {
            "id": "step1_lead_sheet",
            "title": "Step 1: Prepare Your Lead Sheet",
            "text": (
                "Start by creating a Google Sheet with columns for Name, Email, Company, "
                "Email 1 Date, Email 2 Date, Email 3 Date, and Notes. The date columns "
                "are your tracking mechanism. When they're empty, it means that email "
                "hasn't been sent yet. Populate this sheet with your prospect data. "
                "You can source leads from LinkedIn Sales Navigator, Apollo, or any CRM. "
                "The key insight here is that your spreadsheet becomes your database. "
                "Every row is a prospect, and every date column tells you exactly where "
                "they are in your sequence. No databases, no APIs. Just a spreadsheet."
            ),
        },
        {
            "id": "step2_create_scenario",
            "title": "Step 2: Create the Make.com Scenario",
            "text": (
                "Now let's build the automation in Make.com. First, add a Google Sheets "
                "Search Rows module. Connect your Google account and select your spreadsheet. "
                "Leave the query empty for now. Next, add a Tools Filter module. "
                "Set the condition to: email exists and email 1 date does not exist. "
                "This ensures you only contact prospects who haven't received the first email. "
                "Then add a Resend Send Email module. Connect your Resend API key. "
                "Map the recipient email from your sheet row and personalize the subject "
                "and body using fields like company name. Keep emails plain text for "
                "better deliverability. After that, add a Tools Sleep module set to "
                "three seconds. This prevents bulk sending flags and respects rate limits. "
                "Finally, add a Google Sheets Update Row module. Map the row number "
                "and set the email 1 date column to the current timestamp. "
                "This marks the prospect as contacted so they won't be processed again."
            ),
        },
        {
            "id": "step3_schedule",
            "title": "Step 3: Schedule the Scenario",
            "text": (
                "Set your Make.com scenario to run every 30 to 60 minutes during business hours. "
                "Start with 20 to 50 emails per day and gradually increase as your domain warms up. "
                "This gradual ramp is crucial for maintaining email deliverability. "
                "Bulk sending from a cold domain will trigger spam filters instantly."
            ),
        },
        {
            "id": "deliverability",
            "title": "Email Deliverability Essentials",
            "text": (
                "Email deliverability can make or break your outreach. You need three DNS records: "
                "SPF authorizes which servers can send from your domain. "
                "Set it to include Resend's servers. "
                "DKIM cryptographically signs your emails so providers can verify they haven't "
                "been tampered with. Generate your DKIM key in Resend and add it as a TXT record. "
                "DMARC tells email providers what to do with unauthenticated email. "
                "Start with p equals none to monitor, then move to p equals quarantine. "
                "Critical rule: use a subdomain like outreach dot your domain dot com "
                "for cold outreach. This protects your primary domain's reputation "
                "if anything goes wrong."
            ),
        },
        {
            "id": "extensions",
            "title": "Extensions and Next Steps",
            "text": (
                "Once the basic pipeline works, you can extend it significantly. "
                "Add personalization by fetching LinkedIn data and using an LLM like Claude "
                "to generate unique email bodies for each prospect. "
                "Build multi-touch sequences with follow-up emails at day three, seven, "
                "and fourteen. Implement reply detection to automatically remove responders "
                "from the sequence. And create an analytics dashboard to track "
                "your outreach metrics. The foundation you've built here scales "
                "to hundreds or thousands of prospects."
            ),
        },
        {
            "id": "outro",
            "title": "Key Takeaways",
            "text": (
                "To recap: GTM engineering combines AI, automation, and sales strategy. "
                "A simple email outreach engine can be built in under an hour "
                "with Make.com and Resend. Domain reputation management is critical. "
                "Start simple, then layer on personalization. "
                "And always track your outreach with status columns. "
                "This is Let's Vibe AI. Keep building."
            ),
        },
    ],
}


def main():
    parser = argparse.ArgumentParser(description="Generate TTS voiceover for course videos")
    parser.add_argument("--script", default="gtm_email", help="Script key to generate")
    parser.add_argument("--output", default="public/voiceover", help="Output directory")
    args = parser.parse_args()

    scripts = {
        "gtm_email": GTM_EMAIL_AUTOMATION_SCRIPT,
    }

    script = scripts.get(args.script)
    if not script:
        print(f"Unknown script: {args.script}. Available: {list(scripts.keys())}")
        sys.exit(1)

    repo_root = Path(__file__).resolve().parent.parent
    output_dir = str(repo_root / args.output)

    print(f"Generating voiceover for: {script['title']}")
    print(f"Output directory: {output_dir}")

    metadata = generate_voiceover(script["sections"], output_dir)

    # Save full script manifest too
    manifest = {
        "title": script["title"],
        "fps": script["fps"],
        "sections": metadata,
    }
    manifest_path = repo_root / "public" / "script_manifest.json"
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, indent=2)
    print(f"Script manifest saved: {manifest_path}")


if __name__ == "__main__":
    main()
