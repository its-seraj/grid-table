import dataArray from "./data.json";
import Chip from "./Chip";
import "./Basic.css";

const FolderIcon = () => (
  <svg
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Folder">
      <path
        id="Vector"
        d="M13 4.19208C13 3.94727 12.9027 3.71248 12.7296 3.53937C12.5565 3.36626 12.3217 3.26901 12.0769 3.26901H6.07692L4.96923 1.79208C4.88325 1.67744 4.77176 1.58439 4.64358 1.5203C4.51541 1.45622 4.37407 1.42285 4.23077 1.42285H1.92308C1.67826 1.42285 1.44347 1.5201 1.27036 1.69321C1.09725 1.86632 1 2.10111 1 2.34593V10.6536C1 10.8984 1.09725 11.1332 1.27036 11.3063C1.44347 11.4794 1.67826 11.5767 1.92308 11.5767H12.0769C12.3217 11.5767 12.5565 11.4794 12.7296 11.3063C12.9027 11.1332 13 10.8984 13 10.6536V4.19208Z"
        stroke="var(--neutral-colors-400)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);
const UserIcon = () => (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="User">
      <g id="Group">
        <path
          id="Vector"
          d="M0.75 13.166V12.416C0.75 11.7266 0.885795 11.0439 1.14963 10.4069C1.41347 9.76997 1.80018 9.19121 2.28769 8.70371C2.7752 8.2162 3.35395 7.82949 3.99091 7.56565C4.62787 7.30181 5.31056 7.16602 6 7.16602C6.68944 7.16602 7.37213 7.30181 8.00909 7.56565C8.64605 7.82949 9.2248 8.2162 9.71231 8.70371C10.1998 9.19121 10.5865 9.76997 10.8504 10.4069C11.1142 11.0439 11.25 11.7266 11.25 12.416V13.166"
          stroke="var(--neutral-colors-400, #9291A5)"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M6 7.16602C6.79565 7.16602 7.55871 6.84995 8.12132 6.28734C8.68393 5.72473 9 4.96167 9 4.16602C9 3.37037 8.68393 2.6073 8.12132 2.0447C7.55871 1.48209 6.79565 1.16602 6 1.16602C5.20435 1.16602 4.44129 1.48209 3.87868 2.0447C3.31607 2.6073 3 3.37037 3 4.16602C3 4.96167 3.31607 5.72473 3.87868 6.28734C4.44129 6.84995 5.20435 7.16602 6 7.16602V7.16602Z"
          stroke="var(--neutral-colors-400, #9291A5)"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </g>
  </svg>
);
const EmailIcon = () => (
  <svg
    width="14"
    height="12"
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Email">
      <path
        id="Vector"
        d="M13 3.16602V9.16602C13 9.56384 12.842 9.94537 12.5607 10.2267C12.2794 10.508 11.8978 10.666 11.5 10.666H2.5C2.10218 10.666 1.72064 10.508 1.43934 10.2267C1.15804 9.94537 1 9.56384 1 9.16602V3.16602"
        stroke="var(--neutral-colors-400, #9291A5)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        d="M13 3.16602C13 2.76819 12.842 2.38666 12.5607 2.10536C12.2794 1.82405 11.8978 1.66602 11.5 1.66602H2.5C2.10218 1.66602 1.72064 1.82405 1.43934 2.10536C1.15804 2.38666 1 2.76819 1 3.16602L6.205 6.41602C6.4434 6.56502 6.71887 6.64402 7 6.64402C7.28113 6.64402 7.5566 6.56502 7.795 6.41602L13 3.16602Z"
        stroke="var(--neutral-colors-400, #9291A5)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);
const DateIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Calendar">
      <path
        id="Vector"
        d="M12.2 2.76611H1.8C1.35817 2.76611 1 3.12429 1 3.56611V12.3661C1 12.8079 1.35817 13.1661 1.8 13.1661H12.2C12.6418 13.1661 13 12.8079 13 12.3661V3.56611C13 3.12429 12.6418 2.76611 12.2 2.76611Z"
        stroke="var(--primary-colors-purple, #4A3AFF)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        d="M1 5.96631H13"
        stroke="var(--primary-colors-purple, #4A3AFF)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_3"
        d="M4.19922 3.96602V1.16602"
        stroke="var(--primary-colors-purple, #4A3AFF)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_4"
        d="M9.80078 3.96602V1.16602"
        stroke="var(--primary-colors-purple, #4A3AFF)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);

function Basic(props) {
  return (
    <div className="basic-container">
      <div className="header-container">
        <div>
          <div className="header1">Basic Table Template</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </div>
        </div>
        <div className="header-right-container">
          <div className="reset">Reset All</div>
          <div className="export">
            <FolderIcon />
            <div>Export report</div>
          </div>
        </div>
      </div>
      <div className="body-container">
        <div className="table-conntainer">
          <div className="table">
            <div className="table-head">
              <div className="users">
                <UserIcon />
                <div>Users</div>
              </div>
              <div className="status">Status</div>
              <div className="email">
                <EmailIcon />
                <div>Email Address</div>
              </div>
              <div className="date">
                <DateIcon />
                <div>Date</div>
              </div>
              <div className="teams">Teams</div>
            </div>
            <div className="table-body">
              {dataArray.map((row) => (
                <div className="table-row">
                  <div className="row1">{row.name}</div>
                  <div className="row2 status">
                    <Chip text={row.status} />
                  </div>
                  <div className="row3 email">{row.email}</div>
                  <div className="row4">{row.date}</div>
                  <div className="row5">
                    {row.teams.map((team) => (
                      <Chip text={team} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basic;
