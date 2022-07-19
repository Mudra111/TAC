import React, { useState } from "react";
import "./Gigs.css";
import ActiveOff from "./BuyerReq_comp1";
import SentOff from "./BuyerReq_comp2";

export default function Gigs() {
	const [activegig, setActivegig] = useState(true);
	const [pendingApp, setPendingApp] = useState(false);
    const [requireModi, setRequireModi] = useState(false);
    const [draft, setDraft] = useState(false);
    const [denied, setDenied] = useState(false);
    const [paused, setPaused] = useState(false);

	return (
		<div>
			<div className="MainDivGigs">
				<div className="FrstDGig">
					<p>Gigs</p>
				</div>

				<div className="ScndDGig">
					<div className="FstInnScnDGig">
						<div
							className={`${activegig ? "FstinnSDGig1Act" : "FstinnSDGig1"}`}
							onClick={() => {
								setActivegig(true);
								setPendingApp(false);
                                setRequireModi(false);
                                setDraft(false);
                                setDenied(false);
                                setPaused(false);
							}}
						>
							ACTIVE
						</div>

						<div
							className={`${pendingApp ? "FstinnSDGig2Act" : "FstinnSDGig2"}`}
							onClick={() => {
								setActivegig(false);
								setPendingApp(true);
                                setRequireModi(false);
                                setDraft(false);
                                setDenied(false);
                                setPaused(false);
							}}
						>
							PENDING APPROVAL
						</div>

						<div
							className={`${requireModi ? "FstinnSDGig3Act" : "FstinnSDGig3"}`}
							onClick={() => {
								setActivegig(false);
								setPendingApp(false);
                                setRequireModi(true);
                                setDraft(false);
                                setDenied(false);
                                setPaused(false);
							}}
						>
							REQUIRES MODIFICATION
						</div>

						<div
							className={`${draft ? "FstinnSDGig4Act" : "FstinnSDGig4"}`}
							onClick={() => {
								setActivegig(false);
								setPendingApp(false);
                                setRequireModi(false);
                                setDraft(true);
                                setDenied(false);
                                setPaused(false);
							}}
						>
							DRAFT
						</div>

						<div
							className={`${denied ? "FstinnSDGig5Act" : "FstinnSDGig5"}`}
							onClick={() => {
								setActivegig(false);
								setPendingApp(false);
                                setRequireModi(false);
                                setDraft(false);
                                setDenied(true);
                                setPaused(false);
							}}
						>
							DENIED
						</div>

						<div
							className={`${paused ? "FstinnSDGig6Act" : "FstinnSDGig6"}`}
							onClick={() => {
								setActivegig(false);
								setPendingApp(false);
                                setRequireModi(false);
                                setDraft(false);
                                setDenied(false);
                                setPaused(true);
							}}
						>
							PAUSED
						</div>
					</div>

					<div className="ScndInnScnDGig">
						<button>CREATE A NEW GIG</button>
					</div>
				</div>

				<div className="ThrdDGig">
					{activegig && <ActiveOff />}
					{pendingApp && <SentOff />}
					{requireModi && <SentOff />}
					{draft && <SentOff />}
					{denied && <SentOff />}
					{paused && <SentOff />}
				</div>
			</div>
		</div>
	);
}
