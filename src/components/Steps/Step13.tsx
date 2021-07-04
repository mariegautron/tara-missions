import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { FormikValues } from "formik";
import React from "react";
import { transformDomain, valueMissionToTab } from "../../utils/valuesToString";
import { FormikStep } from "../FormikStep";
import ResultDesign from "../Results/Design";
import ResultDevMobile from "../Results/DevMobile";
import ResultDevWeb from "../Results/DevWeb";

function Step13({ values }: FormikValues) {
  console.log("step13", values);
  return (
    <FormikStep label="Results">
      <Box paddingBottom={4} style={{ marginTop: 20, marginBottom: 50 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          ✈️ Résultats
        </Typography>
        <Typography
          variant="body1"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="primary"
        >
          {values.firstName} {values.lastName}
        </Typography>
        <Typography
          variant="body1"
          style={{ marginBottom: 20, fontStyle: "italic" }}
          color="textPrimary"
        >
          {values.prom} {transformDomain(values.domain)}
        </Typography>
        <Typography
          variant="body1"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          Les missions que tu veux faire :
        </Typography>
        <List style={{ marginBottom: 20 }}>
          {valueMissionToTab(values).map((mission) => (
            <ListItem style={{ padding: 0 }}>
              <CheckIcon style={{ marginRight: 10, maxWidth: 20 }} />
              <ListItemText primary={mission} />
            </ListItem>
          ))}
        </List>
        {values.old === "non" &&
          (values.missionDevMobile || values.missionDevMobileSecu) && (
            <ResultDevMobile values={values} />
          )}
        {values.old === "non" &&
          (values.missionDevWebVue || values.missionDevWebReact) && (
            <ResultDevWeb values={values} />
          )}
        {values.old === "non" && values.missionUXUI && (
          <ResultDesign values={values} />
        )}
        {values.ol === "non" && <ResultDesign values={values} />}
      </Box>
    </FormikStep>
  );
}

export default Step13;
