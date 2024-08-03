import React from "react";
import { ProblemStatus } from "../../types/assignment";
import { Problem } from "../../types/problems";
import { Link } from "react-router-dom";

interface ProblemCardProps {
	key: number;
	problem: Problem;
	problemStatus?: ProblemStatus;
	assignmentId?: number;
	contestId?: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
	problem,
	problemStatus,
	assignmentId,
	contestId,
}) => {
	const getDifficultyClass = (difficulty: string) => {
		switch (difficulty) {
			case "Easy":
				return "font-bold text-success";
			case "Medium":
				return "font-bold text-warning";
			case "Hard":
				return "font-bold text-danger";
			default:
				return "font-bold text-gray-500"; // Default class if difficulty is not matched
		}
	};

	// Determine URL based on whether it is an assignment or contest
	let problemLink;
	console.log(assignmentId, contestId);
	if (assignmentId) {
		problemLink = `/assignment/${assignmentId}/problem/${problem.problemId}`;
	} else if (contestId) {
		problemLink = `/contest/${contestId}/problem/${problem.problemId}`;
	} else {
		problemLink = `/practice/problem/${problem.problemId}`;
	}

	return (
		<div className="card bg-white shadow-xl p-4">
			<div className="flex flex-row justify-between items-center">
				<div className="w-2/3 flex flex-col">
					<h2 className="card-title text-xl font-semibold text-basecolor">
						{problem.problemTitle}
					</h2>
					<div className={`flex flex-col text-basecolor mb-4`}>
						<span className="flex flex-row">
							<p className={getDifficultyClass(problem.problemDifficulty)}>
								{problem.problemDifficulty}
							</p>
						</span>
						<span>Score: {problemStatus?.problemScore ?? "Not Attempted"}</span>
					</div>
				</div>
				<div className="divider divider-horizontal"></div>
				<div className="w-1/3 flex justify-center items-center">
					<Link to={problemLink}>
						<button className="btn btn-primary text-white">
							Solve Problem
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProblemCard;
